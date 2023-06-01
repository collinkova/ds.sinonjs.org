<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ds.sinonjs.org' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@ss%{fb&=.m?I u7KNgd;|8dhc@AsB*3D*,cbBs.b5p,,&9n1=bBqQLNzlbx7XYm' );
define( 'SECURE_AUTH_KEY',  'Mdc}4>r@?)ZAVEzFJQT{k(mMCCdfMgVhDL.p:07m;-`>X8=BYf6`pr5mFzP0K),W' );
define( 'LOGGED_IN_KEY',    '3YY?s#A;},RijzAnq<HqlC3rfk:EJ?ViuP(u1Avk-OOd<:>X!:5O%h>CY*66oq(b' );
define( 'NONCE_KEY',        'hoflW&; ;cBf2]NLc$}Sk)}Q9P59Vc3]qpd+bw_Rt6xepNAPa}6g2dt|,W|TF!az' );
define( 'AUTH_SALT',        '4EeI.aw&R4A+<|e?_Vu$m)wuU$](NTNu5&vhBtfk?]aN_NHcovR7Vn/%}(^.u.H^' );
define( 'SECURE_AUTH_SALT', '[Sb+9j.<zb1G.f[b#h>T|iirE=2I3%-oL2 YboMUN7=G^W&bo-(41eza&BkBA31p' );
define( 'LOGGED_IN_SALT',   '7qImKDY:z}{_t>4*C{}-}4[0;n%~zR&8425x%$dk w5OV(w2yC94>Ccs%1MW>ozp' );
define( 'NONCE_SALT',       'K/>h<C~/~f!ps<=]S*kaWXW=(vK<CM&*eX4f~Ixr<kyG0&F-uGO7J Ks*Xr>y+ZD' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
