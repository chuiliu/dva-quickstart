import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

class UserSearchForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO:
    // const { getFieldValue } = this.props.form;
    // this.props.onSearch({

    // });
  };

  handleReset = () => {
    this.props.form.resetFields()
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="inline" className="search-form" onSubmit={this.handleSubmit}>
        <Form.Item label="账号">
          {getFieldDecorator('id')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="昵称">
          {getFieldDecorator('nickname')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="邮箱">
          {getFieldDecorator('email')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="手机">
          {getFieldDecorator('tel')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="电话">
          {getFieldDecorator('phone')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="姓名">
          {getFieldDecorator('name')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="机构">
          {getFieldDecorator('org')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="公司">
          {getFieldDecorator('company')(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="状态">
          {getFieldDecorator('status')(
            <Select style={{width: 80}}>
              <Option value="" key=""></Option>
              <Option value="1" key="1">正常</Option>
              <Option value="0" key="0">停用</Option>
              <Option value="2" key="2">冻结</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">查询</Button>
          <Button onClick={this.handleReset}>重置</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(UserSearchForm);
