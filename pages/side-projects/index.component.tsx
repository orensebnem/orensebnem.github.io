'use client'
import {Chrono} from "react-chrono";
import {Center} from "@chakra-ui/react";

const SideProjectComponent = () => {
    const items = [
        {
            title: '25 Sep 2023',
            cardTitle: 'I need simple project management tool',
            media: {
                name: 'project management',
                source: {
                    url: '/images/side-projects/project-management.jpeg',
                    // url: "/dunkirk.mp4"
                },
                type: 'IMAGE',
            },
            cardDetailedText: `While there are numerous project and task management tools available, 
            many of them lack one crucial element: simplicity. 
            This led me to embark on the journey of working my own project and task management application.`
        }
    ]

    return (
            <Center style={{width: "100%", height: "100%",
                marginBottom: 100,
                paddingBottom: 50,
            }}>
                <Chrono
                    items={items}
                    mode="VERTICAL"
                    showAllCardsHorizontal
                    cardPositionHorizontal="BOTTOM"
                    cardHeight={300}
                    lineWidth={5}
                    cardWidth={300}
                    mediaHeight={200}
                    slideShow
                    theme={{
                        primary: 'black',
                        secondary: 'black',
                        cardBgColor: 'white',
                        titleColor: 'black',
                        titleColorActive: 'white',
                    }}
                    useReadMore
                    focusActiveItemOnLoad
                    slideItemDuration={2550}
                    itemWidth={300}
                    onItemSelected={(selected) => console.log(selected)}
                    timelinePointDimension={20}
                    timelinePointShape="circle"
                    // cardPositionHorizontal="TOP"
                    buttonTexts={{
                        first: 'Jump to First',
                        last: 'Jump to Last',
                        next: 'Next',
                        previous: 'Previous',
                    }}
                    enableDarkToggle
                    onScrollEnd={() => console.log('end reached')}
                    verticalBreakPoint={1920}
                    enableBreakPoint
                    mediaSettings={{
                        imageFit: 'cover',
                    }}
                />
            </Center>
    )
}

export default SideProjectComponent;