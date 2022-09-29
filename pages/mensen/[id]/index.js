import { useRouter } from 'next/router'
import { useEffect } from 'react';
import router from 'next/router'
import dataMensen from '../../../utils/data'




import Image from 'next/image';


export const getStaticPaths = async () => {
  const res = await fetch('https://openmensa.org/api/v2/canteens');
  const data = await res.json();

  const paths = data.slice(0,25).map(mensa => {
    return {
      params: { id: mensa.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://openmensa.org/api/v2/canteens/'+ id);
  const data = await res.json();
  
  return {
    props: { mensa: data }
  }
}

const Details = ({ mensa }) => {
  return (
    <div>
      <h1>{ mensa.name }</h1>
      <p>{ mensa.city }</p>
      <p>{ mensa.address }</p>
    </div>
  )
}

export default Details;
