import React, { createRef, useRef, useState } from 'react'
import { Button, ButtonToolbar, Form, FormGroup, Schema } from 'rsuite'
import FromItem from '../../components/FormItem'
import { GridLayout } from '../../components/StyledTemplate/GridLayout'
const { StringType } = Schema.Types;

const model = Schema.Model({
  account: StringType().isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.'),
});


const Login: React.FC = () => {

  // const [form_value, set_form_value] = useState<{ account: string, password: string }>({ account: "", password: "" });
  let form_ref = useRef<any>();

  const handle_submit = async () => {
    const form = form_ref.current;
    const result = await form.checkAsync();

    if (result.hasError) {
      return;
    }

    let form_data = form.state?.fromValue;
    console.log(form_data)

  };

  return (
    <GridLayout justify="center" align="center" margin="10rem">
      <Form
        layout="horizontal"
        ref={form_ref}
        model={model}
      >
        <FromItem name="account" placeholder="账号" add_on_icon="avatar" />
        <FromItem name="password" placeholder="密码" type="password" />

        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary" onClick={handle_submit}>Login</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </GridLayout>
  )
}

export default Login
