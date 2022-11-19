

export default function Esm(){
    return (
<Flex
      bg={useColorModeValue("white", "white")}
      p={20}
      w="half"
      alignItems="left"
      justifyContent="center"
    >
    
    <Box 
    p={'20'}
    mx={'auto'}
    w="6xl"
    h="5">
    <Img src='/fsm-3.jpg' alt='Asista' />
    </Box>
        <chakra.h2
        color={useColorModeValue("black")}
        w="2xl"
        fontSize={"7xl"}
        >
          03
        <Flex
            alignItems="center"
            mt={0}
            color={useColorModeValue("gray.700", "gray.200")}
          >
         
         <Flex
        fontSize={"4xl"}
        mt={15}
        color='purple.600'
          >
          Asista ESM
        </Flex>
          </Flex>


          <Flex>
          <Text
            fontSize='xl'
            padding={'2'}
            spacing={10}
            >
           Provide consistant value-added services to your customers, agents or employees with Asista's Enterprise Service Management Solution while you align yourself with service management standards.
            <Text >
            Expand your service management beyond IT services to include HR, Finance, Legal, Facilities and much more, all with one platform!
            </Text>
          </Text>
         
          </Flex>

        <Text fontSize='xl' alignItems={'start'} padding={'5px'} >
          <List spacing={3} size={"2px"}>
          <ListItem>
          <ListIcon as={CheckCircleIcon} color='purple.500' />
            Self-Service Portal
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Knowledgebase Management         
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Service Request Management         
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            SLA Management
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Dashboards & Reports
            </ListItem><ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            CSAT Surveys
            </ListItem><ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Request Automation
            </ListItem>

          </List>
        </Text>

        <Link >
          <Text fontSize='xl' color='purple.300'>
            Know More...
          </Text>
        </Link>
     
    </chakra.h2>
</Flex>
    ) 
}
