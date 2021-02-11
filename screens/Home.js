import React, {useState} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native'
import {COLORS, FONTS, icons, SIZES, images} from '../constants'

const LineDivider = () => {
    return(
        <View style={{width:1, paddingVertical: 18}}>
            <View style={{flex:1, borderLeftColor:COLORS.lightGray, borderLeftWidth:1}}></View>
        </View>
    )
}

const Home = () => {

    const profileData = {
        name: "Username",
        point: 200
    }

    const bookOtherWordsForHome = {
        id: 1,
        bookName: "Other Words For Home",
        bookCover: images.otherWordsForHome,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Jasmine Warga",
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "The Metropolis",
        bookCover: images.theMetropolist,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Seith Fried",
        genre: [
            "Adventure", "Drama"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "The Tiny Dragon",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookOtherWordsForHome,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookTheMetropolis,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...bookTheTinyDragon,
            completion: "10%",
            lastRead: "1d 2h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon
            ]
        },
    ]



    const [profile, setProfile] = useState(profileData)
    const [myBooks, setMyBooks] = useState(myBooksData)
    const [categories, setCategories] = useState(categoriesData)
    const [selectedCategory, setSelectedCategory] = useState(1)

    const renderHeader = (profile) => {
        return(
            <View style={styles.renderHeader}>
                {/* Gretting */}
                <View style={{flex:1}}>
                    <View style={{marginRight: SIZES.padding}}>
                        <Text style={{color:COLORS.white, ...FONTS.h3}}>Good morning</Text>
                        <Text style={{color:COLORS.white, ...FONTS.h2}}>{profile.name}</Text>
                    </View>
                </View>
                {/* point */}
                <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    height:40,
                    paddingLeft:3,
                    paddingRight: SIZES.radius,
                    borderRadius:20,
                }}
                onPress={() => console.log('point')}
                >
                    <View style={styles.btn}>
                        <View style={styles.boule}>
                            <Image 
                            source={icons.plus_icon}
                            resizeMode="contain"
                            style={{
                                width:20,
                                height:20
                            }}
                            />
                        </View>
                        <Text style={styles.textPoint}>{profile.point} points</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

const renderButtonSection = () => {
    return(
        <View style={styles.sectionbtn}>
            <View style={styles.sectionbar}>
                {/* claim */}
                <TouchableOpacity
                style={{flex:1}}
                onPress={() => console.log('claim')}
                >
                    <View style={styles.fisrtbtn}>
                        <Image 
                        source={icons.claim_icon}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25
                        }}
                        />
                        <Text style={{marginLeft: SIZES.base, color:COLORS.white, ...FONTS.body3}}>Claim</Text>
                    </View>
                </TouchableOpacity>
                {/* Divider */}
                <LineDivider />
                {/* Get point */}
                <TouchableOpacity
                style={{flex:1}}
                onPress={() => console.log('Get point')}
                >
                    <View style={styles.secondbtn}>
                        <Image 
                        source={icons.point_icon}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25
                        }}
                        />
                        <Text style={{marginLeft: SIZES.base, color:COLORS.white, ...FONTS.body3}}>Get point</Text>
                    </View>
                </TouchableOpacity>
                {/* Divider */}
                <LineDivider />
                {/* My card */}
                <TouchableOpacity
                style={{flex:1}}
                onPress={() => console.log('My card')}
                >
                    <View style={styles.threehbtn}>
                        <Image 
                        source={icons.card_icon}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25
                        }}
                        />
                        <Text style={{marginLeft: SIZES.base, color:COLORS.white, ...FONTS.body3}}>My card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const renderMyBookSection = (myBooks) => {

    const renderItem = ({item, index}) => {
        return(
           <TouchableOpacity
           style={{
               flex:1,
               marginLeft: index == 0 ? SIZES.padding : 0,
               marginRight: SIZES.radius
           }}
           onPress={() => console.log('My Book')}
           >
               {/* Book cover  */}
               <Image 
               source={item.bookCover}
               resizeMode="cover"
               style={{
                   width:180,
                   height:220,
                   borderRadius:20
               }}
               />
               {/* Book Info  */}
               <View style={{marginTop: SIZES.radius, flexDirection:'row',alignItems:'center'}}>
                    <Image 
                    source={icons.clock_icon}
                    style={{
                        width:20,
                        height:20,
                        tintColor: COLORS.lightGray
                    }}
                    />
                    <Text style={{marginLeft:5, ...FONTS.body3, color:COLORS.lightGray}}>{item.lastRead}</Text>
                    <Image 
                    source={icons.page_icon}
                    style={{
                        marginLeft: SIZES.radius,
                        width:20,
                        height:20,
                        tintColor: COLORS.lightGray
                    }}
                    />
                    <Text style={{marginLeft:5, ...FONTS.body3, color:COLORS.lightGray}}>{item.completion}</Text>
               </View>
           </TouchableOpacity>
        )
    }

    return(
        <View style={{flex:1}}>
            {/* Header */}
            <View style={styles.book}>
                <Text style={{...FONTS.h2, color:COLORS.white}}>My Book</Text>
                <TouchableOpacity
                onPress={() => console.log('see more')}
                >
                    <Text style={styles.more}>See more</Text>
                </TouchableOpacity>
            </View>
            {/* Books  */}
            <View style={{flex:1,marginTop: SIZES.padding}}>
                <FlatList 
                data={myBooks}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const renderCategoryHeader = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
            style={{flex:1, marginRight: SIZES.padding}}
            onPress={() => setSelectedCategory(item.id)}
            >
                {
                    selectedCategory == item.id && 
                    <Text style={{...FONTS.h3,color: COLORS.white}}>{item.categoryName}</Text>
                }
                {
                    selectedCategory != item.id && 
                    <Text style={{...FONTS.h3,color: COLORS.lightGray}}>{item.categoryName}</Text>
                }
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex:1, paddingLeft: SIZES.padding}}>
            <FlatList 
            data={categories}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            />
        </View>
    )
}

const renderCategoryData = () => {
    let books = []
    
    let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

    if(selectedCategoryBooks.length > 0){
        books = selectedCategoryBooks[0].books
    }

    const renderItem = ({item}) => {
        return (
            <View style={{marginVertical: SIZES.base}}>
                <TouchableOpacity
                style={{flex:1, flexDirection:'row'}}
                onPress={() => console.log('Category Book')}
                >
                    <Image 
                    source={item.bookCover}
                    resizeMode="cover"
                    style={{
                        width:100,
                        height:100,
                        borderRadius:10
                    }}
                    />
                    <View style={{flex:1, marginLeft:SIZES.radius}}>
                        {/* Book name and author  */}
                        <View>
                            <Text style={{paddingRight:SIZES.padding, ...FONTS.h3, color:COLORS.white}}>{item.bookName}</Text>
                            <Text style={{...FONTS.h3, color:COLORS.lightGray}}>{item.author}</Text>
                        </View>

                        {/* Book Info */}
                        <View style={{flex:1,flexDirection:'row', marginTop:SIZES.radius}}>
                            <Image 
                            source = {icons.page_filled_icon}
                            resizeMode="contain"
                            style={{
                                width:20,
                                height:20,
                                tintColor: COLORS.lightGray
                            }}
                            />
                            <Text style={{...FONTS.body4, color:COLORS.lightGray, paddingHorizontal: SIZES.radius}}>{item.pageNo}</Text>

                            <Image 
                            source = {icons.read_icon}
                            resizeMode="contain"
                            style={{
                                width:20,
                                height:20,
                                tintColor: COLORS.lightGray
                            }}
                            />
                            <Text style={{...FONTS.body4, color:COLORS.lightGray, paddingHorizontal: SIZES.radius}}>{item.readed}</Text>
                        </View>
                        {/* Genre  */}

                        <View style={{flexDirection:'row', marginTop:SIZES.base}}>
                            {
                                item.genre.includes("Adventure") && 
                                <View style={{
                                    justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkGreen,height:30,borderRadius:SIZES.radius
                                }}>
                                    <Text style={{...FONTS.body3,color:COLORS.lightGreen}}>Adventure</Text>
                                </View>
                            }
                            {
                                item.genre.includes("Romance") && 
                                <View style={{
                                    justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkRed,height:30,borderRadius:SIZES.radius
                                }}>
                                    <Text style={{...FONTS.body3,color:COLORS.lightRed}}>Romance</Text>
                                </View>
                            }
                            {
                                item.genre.includes("Drama") && 
                                <View style={{
                                    justifyContent:'center',alignItems:'center',padding:SIZES.base,marginRight:SIZES.base,backgroundColor:COLORS.darkBlue,height:30,borderRadius:SIZES.radius
                                }}>
                                    <Text style={{...FONTS.body3,color:COLORS.lightBlue}}>Drama</Text>
                                </View>
                            }
                        </View>
                    </View>
                </TouchableOpacity>
                {/* BookMark button  */}
                <TouchableOpacity
                style={{position:'absolute', top:5, right:15}}
                onPress={() => console.log('bookmark')}
                >
                    <Image 
                    source={icons.bookmark_icon}
                    resizeMode="contain"
                    style={{
                        width:20,
                        height:20,
                        tintColor: COLORS.lightGray
                    }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={{flex:1, marginTop: SIZES.radius, paddingLeft: SIZES.padding}}>
            <FlatList 
            data={books}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

    return (
        <SafeAreaView style={styles.container}>
            {/* Header section */}
            <View style={styles.header} >
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>
            {/* Body section  */}
                <ScrollView style={{marginTop: SIZES.base}}>
                    {/* Books sections */}
                    <View>
                        {renderMyBookSection(myBooks)}
                    </View>
                    {/* categories sections */}
                    <View style={{marginTop: SIZES.padding}}>
                        <View>
                            {renderCategoryHeader()}
                        </View>
                        <View>
                            {renderCategoryData()}
                        </View>
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.black
    },
    header:{
        height:200
    },
    renderHeader:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:SIZES.padding,
        alignItems:'center'
    },
    btn:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    boule:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    textPoint:{
        marginLeft: SIZES.base,
        color:  COLORS.white,
        ...FONTS.body3
    },
    sectionbtn:{
        flex:1,
        justifyContent:'center',
        padding: SIZES.padding
    },
    sectionbar:{
        flexDirection:'row',
        height:70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.radius
    },
    fisrtbtn:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    secondbtn:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    threehbtn:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    book:{
        paddingHorizontal:SIZES.padding,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    more:{
        ...FONTS.body3,
        color: COLORS.lightGray,
        alignSelf:'flex-start',
        textDecorationLine:'underline'
    }
  });
  

export default Home;
