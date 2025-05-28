 function Card({title, children}){
    return(
      <div className="card"  style={cardStyle}>
           <h1>{title}</h1>
           <div>{children}</div>
      </div>
    )
 }
 const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
  maxWidth: '300px',
};

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    <Card title = 'My Card 1'>
    <p>This is the card content 1!</p>
    </Card>
    <Card title = 'My Card 2'>
    <p>This is the card content 2!</p>
    </Card>
    <Card title = 'My Card 3'>
    <p>This is the card content 3!</p>
    </Card>
    </div>
  )
}

export default App
