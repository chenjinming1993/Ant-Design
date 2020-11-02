import { Form , Input , Item , Button } from 'antd';

import styles from './style.less';

export default () => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Button className={styles.login} type="text"><a href="/login">登陆</a></Button>
          <Button className={styles.backHome} type="text"><a href="/">返回主页</a></Button>
        </div>
      </div>

      <div className={styles.register}>
          <Form
          {...formItemLayout}
          // form={form}
          name="register"
          // onFinish={onFinish}
          scrollToFirstError
          >
          <Form.Item
            name="Username"
            label="Username"
            rules={[
              // {
              //   type: 'email',
              //   message: 'The input is not valid E-mail!',
              // },
              {
                required: true,
                message: 'Please input your Username',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}