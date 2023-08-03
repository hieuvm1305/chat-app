import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type AvatarProps = {
  sizeClass?: string
  imgUrl?: string | null
  classImageContainer?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Avatar = (props: AvatarProps) => {
  const { imgUrl, classImageContainer, ...rest } = props
  return (
    <div {...rest}>
      <div className="relative h-full w-full cursor-pointer">
        <div className={`h-10 w-10 overflow-hidden rounded-full border-[1px] ${props.sizeClass || 'lg:h-10 lg:w-10'} `}>
          <Image
            src={imgUrl && imgUrl.length > 0 ? imgUrl : '/images/img_user.png'}
            width="100"
            height="100"
            alt="user"
            className={classImageContainer}
          />
        </div>
      </div>
    </div>
  )
}