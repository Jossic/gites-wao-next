<?php
define('WP_CACHE_KEY_SALT', '47220beed4c4d3887474809187d1f556');
define('WP_AUTO_UPDATE_CORE', 'minor');// Essa configuração é necessária para garantir que as atualizações do WordPress possam ser gerenciadas adequadamente no WordPress Toolkit. Remova esta linha caso esta instância do WordPress não seja mais gerenciada pelo WordPress Toolkit.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbs339635');

/** MySQL database username */
define('DB_USER', 'dbu359201');

/** MySQL database password */
define('DB_PASSWORD', 'WP_wao$w187');

/** MySQL hostname */
define('DB_HOST', 'db5000349464.hosting-data.io:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'Dk!/i0zES3CzNd!Daf~42kg-_[07gbN6x73[Va)ndwwD)Oi+(6*9~G0w:3E*r-R6');
define('SECURE_AUTH_KEY', '*JQ~p&c1EWfua6I7|:a/_&8%@DZ-2[8Vfq#I-WA2nb@84nv_ZV2[@aL~ce2XO5_!');
define('LOGGED_IN_KEY', '1&OmAU3x&gW874%K7[2Jtc5NTV;9H|04M+/&*&S:ScG]+33*(Iz8!I3!P*[5R7Uj');
define('NONCE_KEY', '&#z70G*pXY|yU2&OIyO4OzUiT99xOdU6b+PSFS5okfO@9hqxU[JBL9|Hb5/[pg2y');
define('AUTH_SALT', 'w0[06vf8)Z4w&To~b5oN3YT9VBHY/Z1D3+y-!7T9%18_[dHBV%0)~S9093EF5(U5');
define('SECURE_AUTH_SALT', '4FIfEz/@T]fF0gX49n30t~96(z+q3M*[+3yA|h7[r5/rY|xe4A4G0|kT(__B1K[m');
define('LOGGED_IN_SALT', 'S9;BM+g&/UyF9]3!eW~&2D94Pra[30[TzgcQCcK_*T/qX+34uwZ(Iul-9jF0NLm9');
define('NONCE_SALT', 'xW9!4LYEV312D%n3y~t:1Yj506G@47otzT)pw9L5W*k3/(WvEgLRG#K_j%!dNX5s');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'X69tTOD7z_';


define('WP_ALLOW_MULTISITE', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
