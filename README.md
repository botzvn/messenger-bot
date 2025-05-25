# Messenger Bot for automation tools

- B1: Download và giải nén tools
- B2: Sử dụng chrome extension Edit with cookie và export dạng JSON
- B3: paste vào file cookie trong thư mục vừa giải nén
- B4: Tin nhắn sẽ in ra log và gọi đến webhook config trong file .env
- B5: Sử dụng /api/send-group-message để gửi tin nhắn đến group

```json
{
  "thread_id": "string_id",
  "text": "Quan tâm"
}
```

<br>

# Lưu ý:

- Tính năng còn cơ bản, chưa gửi tin nhắn được cho user(encrypted)
- Hỗ trợ liên hệ tác giả
