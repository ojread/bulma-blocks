<?php
/**
 * Plugin Name: Bulma Blocks
 * Plugin URI: https://github.com/ojread/bulma-blocks/
 * Description: Provides Bulma elements and components as blocks in the Gutenberg editor.
 * Author: Oliver Read
 * Author URI: https://oliverread.co.uk
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
