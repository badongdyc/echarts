/**
 * 数值处理模块
 * @module echarts/core/number
 */

define(function (require) {

    function _trim(str) {
        return str.replace(/^\s+/, '').replace(/\s+$/, '');
    }

    /**
     * Linear mapping a value from domain to range
     * @memberOf module:echarts/core/number
     * @param  {number} val
     * @param  {Array.<number>} domain Domain extent
     * @param  {Array.<number>} range  Range extent
     * @param  {boolean} clamp
     * @return {number}
     */
    function linearMap (val, domain, range, clamp) {
        var sub = domain[1] - domain[0];

        if (sub === 0) {
            return val;
        }
        var t = (val - domain[0]) / sub;
        if (clamp) {
            t = Math.min(Math.max(t, 0), 1);
        }
        return t * (range[1] - range[0]) + range[0];
    };

    /**
     * Convert a percent string to absolute number.
     * Returns NaN if percent is not a valid string or number
     * @memberOf module:echarts/core/number
     * @param {string|number} percent
     * @param {number} all
     * @return {number}
     */
    function parsePercent(percent, all) {
        if (typeof percent === 'string') {
            if (_trim(percent).match(/%$/)) {
                return parseFloat(percent) / 100 * all;
            }

            return parseFloat(percent);
        }

        return +percent;
    }

    return {

        linearMap: linearMap,

        parsePercent: parsePercent
    }
});