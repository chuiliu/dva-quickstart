import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';

// 角色搜索栏
// TODO: 状态可能需要后端获取
class RoleSearchForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { getFieldValue } = this.props.form;
    this.props.onSearch({
      name: getFieldValue('name') || '',
      code: getFieldValue('code') || '',
      status: getFieldValue('status')
    });
  };

  handleReset = () => {
    this.props.form.resetFields()
  };

  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="inline" className="search-form" onSubmit={this.handleSubmit}>
        <Form.Item label="角色名称">
          {getFieldDecorator('name')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="角色编码">
          {getFieldDecorator('code')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="状态">
          {getFieldDecorator('status')(
            <Select style={{width: 80}}>
              <Select.Option value="" key=""></Select.Option>
              <Select.Option value="1" key="1">正常</Select.Option>
              <Select.Option value="0" key="0">停用</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">查询</Button>
          <Button onClick={this.handleReset}>重置</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(RoleSearchForm);
