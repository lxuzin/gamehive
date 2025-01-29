export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            GameHive에 오신 것을 환영합니다
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            게이머들을 위한 최고의 커뮤니티 플랫폼. 게임 정보를 공유하고, 다른 플레이어들과 소통하세요.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/posts"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              게시판 보기
            </a>
            <a
              href="/characters"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              캐릭터 정보 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
