import ItemList from './ItemList'
const Content = ({item,handleCheck,handleDelete}) => {
    return (
        
        <>
            {item.length ? (
                <ItemList
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ) : (
                <p style={{marginTop:'2rem'}}>Your List is empty</p>
            )
            }
        </>
    )
}
export default Content