import Mock from 'mockjs';

let rolelist = Mock.mock({
  'data|1-10': [{
    'id|+1': 1,
    'name|1': ['部门经理', '普通员工', '默认角色', '系统管理员'],
    'code|10000-99999': 0,
    'role': '@title',
    'sort|1-200': 1,
    'sys|1': ['是', '否'],
    'type|1': ['员工', '未设置'],
    'area': '未设置',
    'time': '@datetime',
    'desc': '...',
    'status': '正常'
  }]
}).data;

export default {
  [`GET /api/role/list`](req, res) {
    console.log(rolelist)
    res.status(200).json({
      code: '200',
      data: rolelist,
      msg: 'success'
    });
  },
  [`POST /api/role/add`](req, res) {
    let result = {
      code: '200',
      data: {}
    }
    res.status(200).json(result);
  }
};
