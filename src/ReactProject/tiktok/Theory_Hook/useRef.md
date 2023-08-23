# Lưu các giá trị qua một tham chiếu bên ngoài function component

# Return an object with the key is { current } and the keyValue is the initialValue
        const ref = useRef(100)
        console.log(ref) => {current: 100}
# Modify current's value
        ref.current = {newValue}