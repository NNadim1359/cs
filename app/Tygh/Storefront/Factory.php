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

namespace Tygh\Storefront;

use Tygh\Database\Connection;
use Tygh\Enum\StorefrontStatuses;
use Tygh\Enum\YesNo;

/**
 * Class Factory creates Storefronts.
 *
 * @package Tygh\Storefront
 */
class Factory
{
    /**
     * @var \Tygh\Database\Connection
     */
    protected $db;

    /**
     * @var \Tygh\Storefront\RelationsManager
     */
    protected $relations_manager;

    /**
     * @var \Tygh\Storefront\Normalizer
     */
    protected $normalizer;

    public function __construct(Connection $db, RelationsManager $relations_manager, Normalizer $normalizer)
    {
        $this->db = $db;
        $this->relations_manager = $relations_manager;
        $this->normalizer = $normalizer;
    }

    /**
     * Creates a storefront from an array.
     *
     * @param array $data Storefront data
     *
     * @return \Tygh\Storefront\Storefront
     */
    public function fromArray(array $data)
    {
        $data = array_merge([
            'storefront_id'     => 0,
            'url'               => '',
            'is_default'        => false,
            'redirect_customer' => false,
            'status'            => StorefrontStatuses::OPEN,
            'access_key'        => '',
            'name'              => '',
            'theme_name'        => '',
            'extra'             => [],
        ], $data);

        $redirect_customer = YesNo::toBool($data['redirect_customer']);
        $is_default = YesNo::toBool($data['is_default']);

        $data = $this->normalizer->normalizeStorefrontData($data);

        $relations = $this->getRelations($data);

        $storefront = new Storefront(
            $data['storefront_id'],
            $data['url'],
            $is_default,
            $redirect_customer,
            $data['status'],
            $data['access_key'],
            $this->relations_manager,
            $data['name'],
            $data['theme_name'],
            $relations
        );

        if ($data['extra']) {
            $storefront->extra = $data['extra'];
        }

        return $storefront;
    }

    protected function getRelations(array $data)
    {
        $relation_names = $this->relations_manager->getRelations();

        $relations = array_filter($data, function($field_name) use ($relation_names) {
            return in_array($field_name, $relation_names);
        }, ARRAY_FILTER_USE_KEY);

        return $relations;
    }

    /**
     * Creates a blank storefront to fill it with data.
     *
     * @return \Tygh\Storefront\Storefront
     */
    public function getBlank()
    {
        return new Storefront(
            0,
            '',
            false,
            false,
            StorefrontStatuses::OPEN,
            '',
            $this->relations_manager,
            '',
            '',
            []
        );
    }
}
