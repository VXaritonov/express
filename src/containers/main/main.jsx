import React from 'react';
import axios from 'axios';

const Main = () => {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {{
        axios.get('/api').then((response) => {
            setData(response.data)
        });
    }}, [])

    return (
        <div>
            Main Page
            {data?.map(({ id, age, name}) => {
                return (
                    <div key={id}>
                        id - {id}, age - {age}, name - {name},
                    </div>
                )
            })}
        </div>
    )
}

export default Main