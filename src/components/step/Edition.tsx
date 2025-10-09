import { StepsContext } from '@/structure/Context'
import type { StepBase } from '@/types'
import type { WritableDraft } from 'immer'
import React from 'react'
import { useContextSelector } from 'use-context-selector'

export default function Edition() {
  const [ edition, setEdition, ...setters ] = useContextSelector(StepsContext, s => {
    return [
      s.edition[0],
      s.edition[1],
      s.classes[1],
      s.ability[1],
      s.species[1],
      s.skills[1],
      s.about[1],
    ]
  })

  const editionButton = (e: string, expansion: string) => {
    return () => {
      if (!edition.value.edition) {
        setters.forEach(set => set((state: WritableDraft<StepBase>) => {
          state.status = 'not opened'
        }))
      }

      setEdition(state => {
        state.name = '版本: ' + e
        state.value.edition = e
        if (!state.value.expansions.includes(expansion)) state.value.expansions.push(expansion)
        else state.value.expansions = state.value.expansions.filter(v => v !== expansion)
      })
    }
  }

  const expansionsCheckbox = (expansion: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setEdition(state => {
        if (e.target.checked) {
          if (!state.value.expansions.includes(expansion)) state.value.expansions.push(expansion)
        } else {
          state.value.expansions = state.value.expansions.filter(v => v !== expansion)
        }
      })
    }
  }

  return <>
    <div>
      <div className={`edition-button ${edition.value.edition === '5e2024' ? 'active' : ''}`} onClick={editionButton('5e2024', 'PHB2024')}>5e 2024</div>
      <div className={`edition-button ${edition.value.edition === '5e2014' ? 'active' : ''}`} onClick={editionButton('5e2014', 'PHB2014')}>5e 2014</div>
    </div>
    <div>
      <label>
        <input
          type="checkbox"
          checked={ edition.value.expansions?.includes('TCE') }
          onChange={expansionsCheckbox('TCE')}
        />
        塔莎的万事坩埚 Tasha's Cauldron of Everything (TCE)
      </label>
      <label>
        <input
          type="checkbox"
          checked={ edition.value.expansions?.includes('XGE') }
          onChange={expansionsCheckbox('XGE')}
        />
        珊娜萨的万事指南 Xanathar's Guide to Everything (XGE)
      </label>
    </div>
  </>
}