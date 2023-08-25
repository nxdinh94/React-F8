import Button from './components/Button'
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <div style={{padding: '0 32px'}}>
        
        <Button/>
        <Button primary disabled/>{/* return bolean */}
      </div>
    </GlobalStyles>
  )
}

export default App;
