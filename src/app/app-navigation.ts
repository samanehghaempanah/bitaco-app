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
        text: 'مشتری ها',
        path: 'basic/customers',
      },
      {
        text: 'پرسنل',
        // path: '',
        hasItems: true,
        items: [
          {
            text: 'لیست پرسنل',
            path: 'basic/employees/employees-list',
          },
          {
            text: 'کارکردهای پرسنل',
            path: 'basic/employees/employees-timesheet',
          },
          {
            text: 'تقویم کاری',
            path: 'basic/employees/employees-calendar',
            disabled: true
          }
        ]
      },
      {
        text: 'کدینگ کالا',
        path: 'basic/products-coding',
      },
      {
        text: 'کدینگ واحد ها',
        path: 'basic/departments-coding',
      },
      {
        text: 'فعالیت های تولیدی',
        path: 'basic/production-activities',
      },
      {
        text: 'شیفت های کاری',
        path: 'basic/work-shifts',
      }
    ]
  },
  {
    text: 'محصولات',
    path: '',
    icon: 'cart',
    items: [
      {
        text: 'محصولات بسته بندی و چاپ',
        hasItems: true,
        items: [
          {
            text: 'ثبت محصول',
            path: 'product/print/new'
          },
          {
            text: 'محصولات من',
            path: 'product/print'
          }
        ]
      },
      {
        text: 'محصولات تولید فیلم',
        hasItems: true,
        items: [
          {
            text: 'ثبت محصول',
            path: 'product/film/new'
          },
          {
            text: 'محصولات من',
            path: 'product/film'
          }
        ]
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
  {
    text: 'تنظیمات',
    // path: '',
    icon: 'preferences',
    items: [
      {
        text: 'پوسته برنامه',
        path: 'setting',
      }
    ],
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