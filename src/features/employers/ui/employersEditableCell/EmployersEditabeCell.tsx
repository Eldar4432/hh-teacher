import { FC } from 'react';

import { Form, InputNumber } from 'antd';

import { Input } from '~shared/ui';

export const EmployersEditabeCell: FC<{
  editing: any;
  dataIndex: any;
  title: any;
  inputType: any;
  children: any;
}> = ({ editing, dataIndex, title, inputType, children, ...restProps }) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          // style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Пожалуйста, введите ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
