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
  iconType: 'link',
  children: [{
    title: '角色管理',
    iconType: 'link',
    link: '/admin/per/role'
  }, {
    title: '二级管理员',
    iconType: 'link',
    link: '/admin/per/sec-admin'
  }, {
    title: '系统管理员',
    iconType: 'link',
    link: '/admin/per/sys-admin'
  }]
}, {
  title: '组织管理',
  iconType: 'link',
  children: [{
    title: '用户管理',
    iconType: 'link',
    link: '/admin/org/users'
  }, {
    title: '部门管理',
    iconType: 'link',
    link: '/admin/org/dept'
  }]
}];

