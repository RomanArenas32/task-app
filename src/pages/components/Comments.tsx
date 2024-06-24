import { useEffect, useState } from "react";
import { getComments } from "../../api/jsonPlaceHolder";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export const Comments = () => {
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    const getCommentsUsers = async () => {
      try {
        const results = await getComments();
        setComments(results);
      } catch (error) {
        console.log(error);
      }
    };

    getCommentsUsers();
  }, []);


  if (comments.length === 0) {
    return <div>cargando comentarios...</div>;
  } else {
    return (
      <div className="comment-container">
        {comments.map((comment: Comment) => (
          <Card key={comment.id}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    {comment.name}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {comment.body}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
};
