<?php
/***************************************************************************
 *                                                                          *
 *   (c) 2004 Vladimir V. Kalynyak, Alexey V. Vinokurov, Ilya M. Shalnev    *
 *                                                                          *
 * This  is  commercial  software,  only  users  who have purchased a valid *
 * license  and  accept  to the terms of the  License Agreement can install *
 * and use this program.                                                    *
 *                                                                          *
 ****************************************************************************
 * PLEASE READ THE FULL TEXT  OF THE SOFTWARE  LICENSE   AGREEMENT  IN  THE *
 * "copyright.txt" FILE PROVIDED WITH THIS DISTRIBUTION PACKAGE.            *
 ****************************************************************************/


namespace Tygh\Addons\VendorCommunication\Notifications\DataProviders;

use Tygh\Enum\UserTypes;
use Tygh\Enum\YesNo;
use Tygh\Notifications\DataProviders\BaseDataProvider;

/**
 * Class CommunicationDataProvider provides a data for message transports that required for sending messages
 * about events added in Vendor Communication addon.
 *
 * @package Tygh\Addons\VendorCommunication\Notifications\DataProviders
 */
class CommunicationDataProvider extends BaseDataProvider
{
    protected $lang_code = null;
    protected $company_id = 0;

    public function __construct(array $data)
    {
        $this->company_id = isset($data['company_id']) ? $data['company_id'] : 0;

        $data['lang_code'] = $this->getLangCode();
        $data['to'] = $this->getTo($data);
        parent::__construct($data);
    }

    protected function getLangCode()
    {
        if (isset($this->lang_code)) {
            return $this->lang_code;
        }

        return $this->lang_code = fn_get_company_language($this->company_id);
    }

    protected function getTo(array $data)
    {
        return [
            'admin' => $this->getAdminReceiver($data),
            'vendor' => $this->getVendorReceiver($data),
            'customer' => $this->getCustomerReceiver($data),
        ];
    }

    protected function getAdminReceiver(array $data)
    {
        $to = db_get_field('SELECT email FROM ?:users WHERE user_type = ?s AND is_root = ?s LIMIT 1',
            UserTypes::ADMIN,
            YesNo::YES
        );
        return $to;
    }

    protected function getVendorReceiver(array $data)
    {
        $to = db_get_field('SELECT email FROM ?:companies WHERE company_id = ?i', $data['company_id']);
        return $to;
    }

    protected function getCustomerReceiver(array $data)
    {
        $to = fn_get_user_short_info($data['user_id']);
        return $to['email'];
    }
}