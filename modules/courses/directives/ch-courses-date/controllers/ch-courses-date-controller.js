/* eslint indent: 0 */

'use strict';

angular
  .module('courses')
  .controller('chCoursesDateController', ['$scope', '$filter', '$rootScope', 'LanguagesSrv',
    function ($scope, $filter, $rootScope, LanguagesSrv) {
      var vm = this;
      var course = $scope.course;
      vm.currentCountry = LanguagesSrv.get();
      var currencies = {};
      var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábados'];

      angular.forEach($scope.currencies, function (value) {
        switch (value.iso_code) {
        case 'ARS':
          currencies.ar = value;
          break;
        case 'CLP':
          currencies.cl = value;
          break;
        case 'UYU':
          currencies.uy = value;
          break;
        default:
          break;
        }
      });

      if (course && course.courses) {
        course.courses = $filter('filter')(course.courses, {
          country: vm.currentCountry
        });
      }

      function setDate(item) {
        if (item && item.fromDay) {
          if (item.fromDay !== item.toDay) {
            item.days = days[item.fromDay] + ' y ' + days[item.toDay];
          } else {
            item.days = days[item.fromDay];
          }
        }
      }

      function setCurrency(item) {
        var currentBill = null;
        var d = new Date(item && item.startDate);

        if (item) {
          item.currency = currencies[vm.currentCountry];
        }

        angular.forEach(course.bills, function (bill) {
          if (item && item.currency && item.currency._id === bill.currency) {
            currentBill = bill;
          }
        });

        if (item) {
          item.price = currentBill.price ? currentBill.price : item.price;
          item.quota = currentBill.quota ? currentBill.quota : item.quota;
          item.priceQuota = currentBill.priceQuota ? currentBill.priceQuota : item.priceQuota;
          item.offerPrice = currentBill.offerPrice ? currentBill.offerPrice : item.offerPrice;
          item.offerPriceQuota = currentBill.offerPriceQuota ? currentBill.offerPriceQuota : item.offerPriceQuota;
          item.offerPriceDate = new Date(d.setDate(d.getDate() - 31));
        }
        console.log(item);
      }

      function parseCourses() {
        if (course && course.courses && course.courses.length) {
          angular.forEach(course.courses, function (item) {
            setCurrency(item);
            setDate(item);
          });
        }
      }

      console.log(course);
      parseCourses()

      $rootScope.$watch('currentCurrency', function () {
        setCurrency();
      });

      vm.course = course;
    }
  ]);
