import { useState } from "react"
import { Button, Card, Space, Form, Input } from "antd"
import { useNavigate, generatePath } from "react-router-dom"

import { ROUTES } from "constants/routes"

function TaskItem({ item, handleUpdateTask, handleDeleteTask }) {
  const navigate = useNavigate()

  const handleListDetail = () => {
    navigate(generatePath(ROUTES.USER.LIST_DETAIL, { id: item.id }), {
      state: { title: item.title, content: item.content },
    })
  }

  const [isUpdate, setIsUpdate] = useState(false)

  if (isUpdate) {
    return (
      <Card size="small" title="Update Task" style={{ marginTop: 16 }}>
        <Form
          name="updateTask"
          layout="vertical"
          initialValues={{
            title: item.title,
            content: item.content,
          }}
          onFinish={(values) => {
            handleUpdateTask(item.id, values)
            setIsUpdate(false)
          }}
        >
          <Form.Item label="tiêu đề" name="title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item label="nội dung" name="content">
            <Input placeholder="Content" />
          </Form.Item>
          <Space style={{ marginTop: 8 }}>
            <Button type="primary" htmlType="submit">
              save
            </Button>
            <Button onClick={() => setIsUpdate(false)}>Cancel</Button>
            <Button danger onClick={() => handleDeleteTask(item.id)}>
              Delete
            </Button>
          </Space>
        </Form>
      </Card>
    )
  }
  return (
    <Card size="small" title={item.title} style={{ marginTop: 16 }}>
      <div>{item.content}</div>
      <Space style={{ marginTop: 8 }}>
        <Button onClick={handleListDetail}>Detail</Button>
        <Button type="primary" ghost onClick={() => setIsUpdate(true)}>
          Update
        </Button>
        <Button danger onClick={() => handleDeleteTask(item.id)}>
          Delete
        </Button>
      </Space>
    </Card>
  )
}

export default TaskItem
