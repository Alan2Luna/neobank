import { useFetch } from './hooks/useFetch'
import { Dashboard } from './components/Dashboard'
import { SubMenu } from './components/SubMenu'
import { AreaChartContainer } from './components/AreaChartContainer'
import { Header } from './components/Header'
import { Box } from './components/Box'
import { PieChartComponent } from './components/PieChartComponent'

import Icon from './assets/elipses.png'
import './App.css'

function App() {

  const { data, isLoading } = useFetch()

  return (
    <>
      <Header />
      <SubMenu />
      <Dashboard>
        <div className="box--container">
          <Box data={35} period={'last month'} />
          <Box data={3} period={'today'}/>
        </div>
        <div className="pie-chart--container">
          <header className="pie-chart--header">
            <h2 className="pie-chart--title">conversion</h2>
            <div className="elipses-container">
              <img src={Icon} />
            </div>
          </header>
          <PieChartComponent />
        </div>
        <AreaChartContainer data={data} loading={isLoading} />
      </Dashboard>
    </>
  )
}

export default App
