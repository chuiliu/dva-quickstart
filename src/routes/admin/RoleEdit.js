// 角色 -> 编辑
import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs, Row, Col, Form, Input, Button } from 'antd';
import Toolbar from '@/components/Toolbar/Toolbar';

const { TextArea } = Input;

class RoleEdit extends Component {
  render() {

    const { params } = this.props.match;
    console.log(params);

    return (
      <div>
        <Toolbar title="编辑角色"></Toolbar>
        <div className="box-content">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="基本信息" key="1">
              <Form>
                <Row>
                  <Col span="10">
                    <Form.Item
                      label="角色名称"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 14 }}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="排序号"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 14 }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span="10">
                    <Form.Item
                      label="角色编码"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 14 }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span="20">
                    <Form.Item
                      label="备注信息"
                      labelCol={{ span: 4 }}
                      wrapperCol={{ span: 19 }}
                    >
                      <TextArea autosize={{ minRows: 3 }} />
                    </Form.Item>
                  </Col>
                  <Col span="20">
                    <Form.Item
                      wrapperCol={{ offset: 4 }}
                    >
                      <Button type="primary">保存</Button>
                      <Button>关闭</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default connect()(RoleEdit);
