import _ from 'lodash'
import { faker } from '@faker-js/faker'
import Image from 'next/image'
import NewsHighlights from './NewsHighlights'
const news = _.times(20, () => {
  return {
    title: faker.lorem.words(8),
    headerImg: faker.image.urlPicsumPhotos(),
  }
})
export default function NewsFeed() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">News Feed</div>
      <div className="flex flex-col gap-6">
        <div className="relative">
          <NewsHighlights />
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {news.slice(1).map((article, i) => (
            <li key={i} className="flex gap-2">
              <div className="">
                <Image
                  src={article.headerImg}
                  alt="image"
                  width={100}
                  height={100}
                  className=" max-w-20 shrink-0 basis-28 overflow-hidden rounded-md text-xs italic"
                />
              </div>
              <div className="flex flex-col gap-1 text-xs  font-semibold  sm:text-sm">
                <div className="line-clamp-2 first-letter:uppercase">
                  {article.title[0].toUpperCase() + article.title.slice(1)}
                </div>
                <div className="flex text-xs text-gray-500 ">
                  <span>CNN</span>
                  <span>{` • `}</span>
                  <span>6 mins</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
