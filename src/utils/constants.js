export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"; // this is named export

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=";

/**
 * there are two types of exports-
 * Default export - default export can be only one in a file. It means, using default export, we can export only one single thing from a file, but if we want to export multiple things from a single file, then we should use second type of export which is 'named export'
 * Syntax for default export - export default CDN_URL
 * Syntax for default import - import CDN_URL from 'fileLocation'
 *
 * Named Export - this is used, when we want to export multiple things from a single file
 * Syntax for named export - just write export before the declaration of that variable/const/function/component
 * Syntax for named import - import {CDN_URL} from 'fileLocation'   // slightly different from default import, just enclose the name inside curly braces
 */
