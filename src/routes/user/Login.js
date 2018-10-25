import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import styles from './Login.less';

const FormItem = Form.Item;

class Login extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        // console.log(values);
        dispatch({
          type: 'login/login',
          payload: { values }
        });
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Row>
        <Col className={styles.loginFormCol}>
          <Form onSubmit={this.onSubmit} className={styles.loginForm}>
            <h3>登录</h3>
            <FormItem>
              {
                getFieldDecorator('username', {
                  rules: [{
                    required: true,
                    message: '请输入用户名'
                  }]
                })(<Input prefix={<Icon type="user"/>} placeholder="用户名" />)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: '请输入密码'
                  }]
                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />)
              }
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className={styles.loginBtn}>登录</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default connect()(Form.create()(Login));
