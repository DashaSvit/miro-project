import { useState } from 'react'
import './App.css'

function App() {
  const [boards, setBoards] = useState<string[]>([])
  const [selectedBoard, setSelectedBoard] = useState<number | null>(null)

  function createBoard() {
    setBoards([...boards, `Доска ${boards.length + 1}`])
    setSelectedBoard(boards.length)
  }

  return (
      <div className="app">
        <header className="header">
          <h2>HSE Project</h2>
          <span>Совместная работа онлайн</span>
        </header>

        <main>
          <h1>Мои доски</h1>
          <p>Создавайте доски и работайте над проектами вместе.</p>

          <button onClick={createBoard}>
            + Создать доску
          </button>

          <div className="boards">
            {boards.map((board, index) => (
                <div
                    className="board"
                    key={index}
                    onClick={() => setSelectedBoard(index)}
                >
                  {board}
                </div>
            ))}
          </div>

          {selectedBoard !== null && (
              <div className="workspace">
                <h2>{boards[selectedBoard]}</h2>
                <p>Здесь скоро появятся стикеры и фигуры!</p>
              </div>
          )}
        </main>
      </div>
  )
}

export default App