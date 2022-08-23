import React, { memo} from 'react';
import { useHeroes } from '../../hooks/useHeroes';
import { NavLink} from 'react-router-dom';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button } from '@chakra-ui/react';

export const Publishers = memo(() => {

    const {getPublishers} = useHeroes();
    const publishers = getPublishers();
    

  return (
    <>
      <Accordion  allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Seleccionar por editorial
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2> 
          <AccordionPanel>
            {
              publishers?.map( publisher => (                    
                    <Button className='m-2' key={publisher}>                     
                    <NavLink className="nav-item "  to={`/${publisher}`}
                    >
                      {publisher}
                    </NavLink>
                    </Button>                    
              ))
            }
          </AccordionPanel>
        </AccordionItem>
      </Accordion>          
      <hr/>
    </>
  )
})