import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button, Table, Pagination, Icon, Popover, Tooltip, Popconfirm } from 'antd';
import Toolbar from '@/components/Toolbar/Toolbar';
import RoleSearchForm from './RoleSearchForm';
import styles from '@/styles/common.less';

// TODO: 实现分页
// TODO: 实现loading

class Role extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showSearchForm: false,
      btnText: '查询'
    };

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDisableClick = this.handleDisableClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.toggleSearchForm = this.toggleSearchForm.bind(this);
  }

  operations = (
    <div className="popover-btn-group">
      <Link className="ant-btn" size="small" to="/admin/per/role/menu">功能菜单</Link>
      <Link className="ant-btn" size="small" to="/admin/per/role/data">数据权限</Link>
      <Link className="ant-btn" size="small" to="/admin/per/role/grant">分配用户</Link>
    </div>
  );

  columns = [{
    title: '',
    align: 'center',
    dataIndex: 'id'
  }, {
    title: '角色名称',
    dataIndex: 'name',
    align: 'center',
    render: (text) => (
      <Link to="">{text}</Link>
    )
  }, {
    title: '角色编码',
    align: 'center',
    dataIndex: 'code'
  }, {
    title: '排序号',
    align: 'center',
    dataIndex: 'sort'
  }, {
    title: '系统角色',
    align: 'center',
    dataIndex: 'sys'
  }, {
    title: '用户类型',
    align: 'center',
    dataIndex: 'type'
  }, {
    title: '数据范围',
    align: 'center',
    dataIndex: 'area'
  }, {
    title: '更新时间',
    align: 'center',
    dataIndex: 'time'
  }, {
    title: '备注信息',
    dataIndex: 'desc'
  }, {
    title: '状态',
    align: 'center',
    dataIndex: 'status'
  }, {
    title: '操作',
    dataIndex: 'operate',
    className: 'table-col-operate',
    render: (text, record) => (
      <span>
        <Tooltip title="编辑" placement="left">
          <Icon type="edit" theme="filled" className={styles.iconSuccess} onClick={this.handleEditClick} />
        </Tooltip>
        <Popconfirm title="确定停用该角色吗？" onConfirm={this.handleDisableClick}>
          <Tooltip title="停用" placement="left">
            <Icon type="stop" theme="outlined" className={styles.iconDanger} />
          </Tooltip>
        </Popconfirm>
        <Popconfirm title="确定删除该角色吗？" onConfirm={this.handleDeleteClick}>
          <Tooltip title="删除" placement="left">
            <Icon type="delete" theme="outlined" className={styles.iconDanger} />
          </Tooltip>
        </Popconfirm>
        <Popover placement="left" content={this.operations}>
          <Icon type="right-circle" theme="outlined" className={styles.iconPrimary} />
        </Popover>
      </span>
    )
  }];

  // 重定向
  handleRedirect(path) {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/redirect',
      payload: path
    });
  }

  // 新增
  handleAddClick() {
    this.handleRedirect('/admin/per/role/add')
  }

  // 编辑
  handleEditClick() {
    this.handleRedirect('/admin/per/role/edit')
  }

  // 搜索 TODO:
  handleSearchClick(value) {
    console.log('search', value);
  }

  // 删除 TODO:
  handleDeleteClick(roleId) {
    console.log(this);
  }

  // 停用 TODO:
  handleDisableClick(roleId) {
    console.log(this);
  }

  // 显示/隐藏查询表单
  toggleSearchForm() {
    const btnText = this.state.showSearchForm ? '查询' : '隐藏';
    this.setState({
      showSearchForm: !this.state.showSearchForm,
      btnText
    });
  }

  // 获取数据
  fetchData(params) {
    const { dispatch } = this.props;
    dispatch({
      type: 'admin/getRoleList'
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { roleList, loading } = this.props;
    const { showSearchForm, btnText } = this.state;

    const isLoading = loading.effects['admin/getRoleList'];

    // console.log('isloading: ', isLoading);

    return (
      <div>
        <Toolbar title="角色管理">
          <Button icon="filter" onClick={this.toggleSearchForm}>{btnText}</Button>
          <Button icon="plus" onClick={this.handleAddClick}>新增</Button>
        </Toolbar>
        <div className="box-content">
          {showSearchForm ? <RoleSearchForm onSearch={this.handleSearchClick} /> : null}
          <Table
            bordered
            columns={this.columns}
            dataSource={roleList}
            rowKey="id"
            pagination={false}
            loading={isLoading}
          >
          </Table>
          { isLoading ? null : <Pagination /> }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loading, admin }) {
  return {
    loading,
    roleList: admin.roleList
  }
}

export default connect(mapStateToProps)(Role);
