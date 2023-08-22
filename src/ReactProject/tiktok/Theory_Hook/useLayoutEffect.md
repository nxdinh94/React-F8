* useEffect
    - Cập nhật lại state
    - Cập nhật lại DOM(mutated)
    - Render lại UI
    - Gọi cleanup nếu deps thay đổi
    - Gọi useEffect's callback

* useLayoutEffect
    - Cập nhật lại state
    - Cập nhật lại DOM(mutated)
    - Gọi cleanup nếu deps thay đổi(sync)
    - Gọi useEffect's callback(sync)
    - Render lại UI