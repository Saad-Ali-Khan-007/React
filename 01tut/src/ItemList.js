import LineItem from './LineItem'
const ItemList = ({ item,handleCheck,handleDelete }) => {
    return (
        <div>
            <ul>
                    {
                        item.map((item) => (
                            <LineItem
                            key={item.id}
                            item={item}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            />
                        ))
                    }
                </ul>
        </div>
    )
}
export default ItemList