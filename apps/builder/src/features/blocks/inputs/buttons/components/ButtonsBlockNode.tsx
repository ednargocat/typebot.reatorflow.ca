import { BlockIndices, ChoiceInputBlock } from 'models'
import React from 'react'
import { ItemNodesList } from '@/features/graph/components/Nodes/ItemNode'
import { Stack, Tag, Text, Wrap } from '@chakra-ui/react'
import { useTypebot } from '@/features/editor'
import { SetVariableLabel } from '@/components/SetVariableLabel'

type Props = {
  block: ChoiceInputBlock
  indices: BlockIndices
}

export const ButtonsBlockNode = ({ block, indices }: Props) => {
  const { typebot } = useTypebot()
  const dynamicVariableName = typebot?.variables.find(
    (variable) => variable.id === block.options.dynamicVariableId
  )?.name

  return (
    <Stack w="full">
      {block.options.dynamicVariableId ? (
        <Wrap spacing={1}>
          <Text>Display</Text>
          <Tag bg="orange.400" color="white">
            {dynamicVariableName}
          </Tag>
          <Text>buttons</Text>
        </Wrap>
      ) : (
        <ItemNodesList block={block} indices={indices} />
      )}
      {block.options.variableId ? (
        <SetVariableLabel
          variableId={block.options.variableId}
          variables={typebot?.variables}
        />
      ) : null}
    </Stack>
  )
}