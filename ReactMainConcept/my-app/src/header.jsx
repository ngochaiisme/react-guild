const lastName = 'Haidilao'
const sum = (a, b) => a + b

const element = (
    <h1>
        hello,world!. I am {lastName}. I am{sum(10, 16)}
    </h1>
)

//ten thuoc tinh phai chuyen thanh camelCase

const element2 = (
    <a href="google.com" tabIndex={11} className="123" id="the-a">
        Google
    </a>
)

const element3 = <h3 />

const elemtent4 = <img src="" />

const element5 = <input />

const comment = `<script>console.log("send token")</script>`

const element6 = <h1 className="greeting">Hello guy</h1>

//babel bien dich element 6 thanh
const element7 = React.createElement('h1', { className: 'greeting' }, 'Hello guy')

const element8 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello,world!',
    },
}
