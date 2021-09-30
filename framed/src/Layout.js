
function Layout({header:Header,navbar:NavBar,main:Main,footer:Footer}) {
    return (
        <div>
            {<Header></Header>}
            {<NavBar></NavBar>}
            {<Main></Main>}
            {<Footer></Footer>}
        </div>
    );
}

export default Layout;