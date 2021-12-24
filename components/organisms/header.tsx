//import { DropdownMenu } from '@/molecules/dropdown-menu'
//import { LeftHandPanel } from '@/organisms/left-hand-panel'
import { TopBar } from '@/organisms/top-bar'
//import { TopNav } from '@/organisms/top-nav'

function Header() {
  return (
    <header tw="bg-theme-secondary">
      <div tw="hidden lg:block">
        <TopBar />
      </div>
      {/* <TopNav />
      <div className="hidden lg:block">
        <DropdownMenu />
      </div>
      <LeftHandPanel /> */}
    </header>
  )
}

export { Header }