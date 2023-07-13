import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { __getPosts } from '../redux/modules/getPosts'

const useGetPosts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(__getPosts())
  }, [dispatch])
}

export default useGetPosts
