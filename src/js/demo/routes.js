angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
  $stateProvider
  .state('app.icons', {
    url: "/icons",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Icons'
    }
  })
  .state('app.icons.flags', {
    url: '/flags',
    templateUrl: 'views/icons/flags.html',
    ncyBreadcrumb: {
      label: 'Flags'
    }
  })
  .state('app.icons.fontawesome', {
    url: '/font-awesome',
    templateUrl: 'views/icons/font-awesome.html',
    ncyBreadcrumb: {
      label: 'Font Awesome'
    }
  })
  .state('app.icons.simplelineicons', {
    url: '/simple-line-icons',
    templateUrl: 'views/icons/simple-line-icons.html',
    ncyBreadcrumb: {
      label: 'Simple Line Icons'
    }
  })
  .state('app.components', {
    url: "/components",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  })
  .state('app.components.buttons', {
    url: '/buttons',
    templateUrl: 'views/components/buttons.html',
    ncyBreadcrumb: {
      label: 'Buttons'
    }
  })
  .state('app.components.social-buttons', {
    url: '/social-buttons',
    templateUrl: 'views/components/social-buttons.html',
    ncyBreadcrumb: {
      label: 'Social Buttons'
    }
  })
  .state('app.components.cards', {
    url: '/cards',
    templateUrl: 'views/components/cards.html',
    ncyBreadcrumb: {
      label: 'Cards'
    }
  })
  .state('app.components.forms', {
    url: '/forms',
    templateUrl: 'views/components/forms.html',
    ncyBreadcrumb: {
      label: 'Forms'
    }
  })
  .state('app.components.switches', {
    url: '/switches',
    templateUrl: 'views/components/switches.html',
    ncyBreadcrumb: {
      label: 'Switches'
    }
  })
  .state('app.components.tables', {
    url: '/tables',
    templateUrl: 'views/components/tables.html',
    ncyBreadcrumb: {
      label: 'Tables'
    }
  })
  .state('app.widgets', {
    url: '/widgets',
    templateUrl: 'views/widgets.html',
    ncyBreadcrumb: {
      label: 'Widgets'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/widgets.js']
        });
      }]
    }
  })
  .state('app.charts', {
    url: '/charts',
    templateUrl: 'views/charts.html',
    ncyBreadcrumb: {
      label: 'Charts'
    },
    resolve: {
      // Plugins loaded before
      // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     return $ocLazyLoad.load([
      //         {
      //             serial: true,
      //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
      //         }
      //     ]);
      // }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/charts.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for Registration Module
  .state('app.registration', {
    url: '/registration',
    templateUrl: 'authentication/registration/registration.html',
    ncyBreadcrumb: {
      label: 'Registration'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['authentication/registration/registration.component.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for clients module
  .state('app.customers', {
    url: '/customers',
    templateUrl: 'customers/customers.html',
    ncyBreadcrumb: {
      label: 'Customers'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['customers/customers.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for client-issues module
  .state('app.issues', {
    url: '/issues',
    templateUrl: 'issues/issues.html',
    ncyBreadcrumb: {
      label: 'Issues'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['issues/issues.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for plans module
  .state('app.plans', {
    url: '/plans',
    templateUrl: 'plans/plans.html',
    ncyBreadcrumb: {
      label: 'Plans'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['plans/plans.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for suppliers module
  .state('app.suppliers', {
    url: '/suppliers',
    templateUrl: 'suppliers/suppliers.html',
    ncyBreadcrumb: {
      label: 'Suppliers'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['suppliers/suppliers.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for subscriptions module
  .state('app.subscriptions', {
    url: '/subscriptions',
    templateUrl: 'subscriptions/subscriptions.html',
    ncyBreadcrumb: {
      label: 'Subscriptions'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['subscriptions/subscriptions.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for vouchers module
  .state('app.vouchers', {
    url: '/vouchers',
    templateUrl: 'vouchers/vouchers.html',
    ncyBreadcrumb: {
      label: 'Vouchers'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['vouchers/vouchers.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for transactions module
  .state('app.transactions', {
    url: '/transactions',
    templateUrl: 'transactions/transactions.html',
    ncyBreadcrumb: {
      label: 'Transactions'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['transactions/transactions.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for users module
  .state('app.users', {
    url: '/users',
    templateUrl: 'users/users.html',
    ncyBreadcrumb: {
      label: 'Users'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['users/users.controller.js']
        });
      }]
    }
  })

  //pramod109
  //Routing for products module
  .state('app.products', {
    url: '/products',
    templateUrl: 'products/products.html',
    ncyBreadcrumb: {
      label: 'Products'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['products/products.controller.js']
        });
      }]
    }
  })

}]);
