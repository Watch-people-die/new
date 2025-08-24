import {HomeWidget} from "@/component/web/widgets/HomeWidget"
import { randomManga } from "@/core/manga"
export default async function Page() {
  const data = await randomManga()
  return (
    <div>
        <HomeWidget randommanga={data.data}/>
    </div>
  )
}