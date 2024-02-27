import { Form } from "react-router-dom"

const CreateProduct = () => {
  return (
    <div>
        <h1>CreateProduct</h1>
        <Form action="/create-product" method="post">
            <div className="form-group">
                <label htmlFor="name">name</label>
                <input type="text" name="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="text" name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="password" name="password"/>
            </div>
            <div className="form-group">
                <label htmlFor="avatar">avatar</label>
                <input type="url" name="avatar"/>
            </div>
            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
        </Form>
    </div>
  )
}

export default CreateProduct;