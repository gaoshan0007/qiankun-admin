import { ReactNode, useEffect, useContext } from 'react';
import { KeepAlive } from 'react-activation'
import SetMainStateContext from '@/hooks/context/connectMainStore'
// import { useEmit } from 'main_hooks/useEvent'

function Keeper(props: { name: string; children: ReactNode }) {
  const { dispatch } = useContext(SetMainStateContext)
  useEffect(() => {
    dispatch!({ type: 'addTabs', value: props.name })
  }, [])

  return (
    <KeepAlive name={props.name} id={props.name}>
      {props.children}
    </KeepAlive>
  )
}

export default function KeeperHoc(name: string, Component: ReactNode): ReactNode {
  return <Keeper key={name} name={name}>{Component}</Keeper>
}