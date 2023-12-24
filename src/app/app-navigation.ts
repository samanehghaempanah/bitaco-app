export const navigation = [
  {
    text: 'داشبورد',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'اطلاعات کاربری',
    path: '/profile',
    icon: 'user'
  },
  {
    text: 'اطلاعات حساب',
    path: '/account',
    icon: 'info'
  },
  {
    text: 'مبانی و تعاریف اولیه',
    path: '',
    icon: 'rename',
    items: [
      {
        text: 'منابع انسانی',
        icon: 'check',
        hasItems: true,
        items: [
          {
            text: 'اشخاص',
            path: 'basic/hr/customers',
          },
          {
            text: 'پرسنل',
            // path: 'basic/hr/employees',
            hasItems: true,
            items: [
              {
                text: 'لیست پرسنل',
                path: 'basic/hr/employees/list',
              },
              {
                text: 'تقویم کاری',
                path: 'basic/hr/employees/calendar',
              }
            ]
          }
        ]
      },
      {
        text: 'لجستیک',
        path: 'basic/logistic',
        icon: 'check',
      },
      {
        text: 'مهندسی و تحقیق توسعه',
        path: 'basic/engineering',
        icon: 'check',
      },
      {
        text: 'تولید و برنامه ریزی',
        path: 'basic/production',
        icon: 'check',
      },
      {
        text: 'مالی',
        path: 'basic/financial',
        icon: 'check',
      },
      {
        text: 'تنظیمات',
        path: 'basic/setting',
        icon: 'check',
      }
    ]
  },
  {
    text: 'محصولات',
    path: '',
    icon: 'cart',
    items: [
      {
        text: 'ثبت محصول',
        path: 'product/new'
      },
      {
        text: 'محصولات من',
        path: 'product'
      }
    ]
  },
  {
    text: 'سفارشات',
    path: '',
    icon: 'textdocument',
    items: [
      {
        text: 'ثبت سفارش',
        path: 'order/new'
      },
      {
        text: 'سفارش های من',
        path: 'order'
      }
    ]
  },
  {
    text: 'طرح',
    // path: '',
    icon: 'palette',
    items: [
      {
        text: 'ثبت طرح',
        path: 'design/new'
      },
      {
        text: 'طرح های من',
        path: 'design'
      }
    ],
    disabled: true

  },
  {
    text: 'حسابداری',
    // path: '',
    icon: 'money',
    items: [
      {
        text: 'فاکتورهای من',
        // path: ''
      }
    ],
    disabled: true
  },
  {
    text: 'رضایت مندی',
    // path: '',
    icon: 'favorites',
    disabled: true
  },

  // {
  //   text: 'نمونه',
  //   icon: 'folder',
  //   items: [
  //     {
  //       text: 'پروفایل',
  //       // path: '/profile'
  //     },
  //     {
  //       text: 'وظایف',
  //       path: '/tasks'
  //     }
  //   ]
  // },
];