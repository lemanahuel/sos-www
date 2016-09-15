/* eslint angular/window-service: 0 */
/* eslint angular/document-service: 0 */
/* eslint indent: 0 */

'use strict';

angular
  .module('core')
  .filter('resizeCloudinary', [function() {
    return function(input, width, height) {
      var size = {
          width: width || 100,
          height: height || 100
        },
        sizeStr = [];

      if (input && input.indexOf('cloudinary') !== -1) {
        sizeStr.push('w_' + size.width);
        sizeStr.push('h_' + size.height);
        sizeStr = sizeStr.join(',');

        if (input.indexOf('w_') !== -1) {
          return input.replace('w_320,h_180', sizeStr);
        } else if (input.indexOf('upload') !== -1) {
          return input.substring(0, input.indexOf('upload')) + 'upload/' + sizeStr + input.substring(input.lastIndexOf('upload') + 6);
        }
      }

      return input;
    };
  }])
  .filter('secondsToHuman', [function() {
    return function(input) {
      var sec = null,
        hours = null,
        minutes = null,
        seconds = null;

      if (input) {
        sec = parseInt(input, 10);
        hours = Math.floor(sec / 3600);
        minutes = Math.floor((sec - (hours * 3600)) / 60);
        seconds = sec - (hours * 3600) - (minutes * 60);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        input = hours + ':' + minutes + ':' + seconds;
      }
      return input;
    };
  }])
  .filter('monthDateArg', ['$filter', function($filter) {
    var standardDateFilterFn = $filter('date');
    return function(dateToFormat, strlen) {
      var month = standardDateFilterFn(dateToFormat, 'MMMM');
      switch (month) {
        case 'January':
          month = 'Enero';
          break;
        case 'February':
          month = 'Febrero';
          break;
        case 'March':
          month = 'Marzo';
          break;
        case 'April':
          month = 'Abril';
          break;
        case 'May':
          month = 'Mayo';
          break;
        case 'June':
          month = 'Junio';
          break;
        case 'July':
          month = 'Julio';
          break;
        case 'August':
          month = 'Agosto';
          break;
        case 'September':
          month = 'Septiembre';
          break;
        case 'October':
          month = 'Octubre';
          break;
        case 'November':
          month = 'Noviembre';
          break;
        case 'December':
          month = 'Diciembre';
          break;
        default:
          month = 'January';
          break;
      }
      return strlen && month ? month.substr(0, strlen) : month;
    };
  }])
  .filter('dayArg', ['$filter', function($filter) {
    var standardDateFilterFn = $filter('date');
    return function(dateToFormat, strlen) {
      var day = standardDateFilterFn(dateToFormat, 'EEEE');

      switch (day) {
        case 'Monday':
          day = 'Lunes';
          break;
        case 'Tuesday':
          day = 'Martes';
          break;
        case 'Wednesday':
          day = 'Miércoles';
          break;
        case 'Thursday':
          day = 'Jueves';
          break;
        case 'Friday':
          day = 'Viernes';
          break;
        case 'Saturday':
          day = 'Sábado';
          break;
        case 'Sunday':
          day = 'Domingo';
          break;
        default:
          day = 'Domingo';
          break;
      }
      return strlen && day ? day.substr(0, strlen) : day;
    };
  }]);
