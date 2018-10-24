// 顶栏：系统主菜单
export const menus = [{
  title: '用户',
  link: '/user'
}, {
  title: '后台管理',
  link: '/admin'
}];

// 侧栏：用户菜单
export const userMenus = [{
  title: '个人信息',
  iconType: 'link',
  children: [{
    title: '修改密码',
    iconType: 'link',
    link: '/user/set/mod'
  }]
}, {
  title: '其他',
  iconType: 'link',
  children: [{
    title: '子菜单',
    iconType: 'link',
    link: '/user/set/test'
  }]
}];

// 侧栏：系统管理菜单
export const adminMenus = [{
  title: '权限管理',
  iconType: 'tool',
  children: [{
    title: '资源管理',
    iconType: 'folder-open',
    link: '/admin/per/res'
  }, {
    title: '角色权限',
    iconType: 'solution',
    link: '/admin/per/role'
  }, {
    title: '二级管理员',
    iconType: 'link',
    link: '/admin/per/sec-admin'
  }, {
    title: '系统管理员',
    iconType: 'key',
    link: '/admin/per/sys-admin'
  }]
}, {
  title: '组织架构',
  iconType: 'team',
  children: [{
    title: '部门管理',
    iconType: 'usergroup-add',
    link: '/admin/org/dept'
  }, {
    title: '用户管理',
    iconType: 'user',
    link: '/admin/org/user'
  }]
}, {
  title: '参数设置',
  iconType: 'setting',
  children: [{
    title: '单位设置',
    iconType: 'link',
    link: '/admin'
  }]
}, {
  title: '日志管理',
  iconType: 'database',
  children: [{
    title: '登录日志',
    iconType: 'login',
    link: '/admin/log/login'
  }, {
    title: '操作日志',
    iconType: 'info-circle',
    link: '/admin/log/operate'
  }, {
    title: '异常日志',
    iconType: 'exclamation-circle',
    link: '/admin/log/exception'
  }]
}];

