
                    HOOK
COMPONENT'S LIFECYCLE: từ khi nó đc thêm vào dom cho tới khi nó hoạt động và 
thay đổi dữ liệu rồi đc gỡ khỏi dom

1. Chỉ dùng cho function component
2. Component đơn giản và trở nên dễ hiểu
    - Không bị chia logic ra như methods trong lifecycle của Class Component
    - Khong cần sử dụng 'this'
3. Khi nào sử dụng Hooks
    - Dự án mới => Hooks
    - Dự án cũ  => 
        + Component mới => Function component + Hooks
        + Component cũ => Giữ nguyên, có thời gian tối ưu sau
    - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class Component
4. Người mới nên bắt đầu với Function  
5. Có khả năng kết hợp function component và Class component